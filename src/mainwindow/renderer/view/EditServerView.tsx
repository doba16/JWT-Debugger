import { FC, useEffect, useImperativeHandle, useState } from "react";
import { useForm } from "react-hook-form"
import { MdStorage } from "react-icons/md";
import { AuthorizationServer } from "../../../common/types/authorization-server";
import { setServer } from "../store/authorization-servers-slice";
import { RootState, useAppDispatch, useAppSelector } from "../store/hooks";
import store from "../store/store";

interface EditServerViewProps {
    serverId: string
}

interface EditForm {
    name: string,
    authorizationUrl: string,
    tokenUrl: string
}

const EditServerView: FC<EditServerViewProps> = ({serverId}) => {

    const dispatch = useAppDispatch()
    const servers = useAppSelector((state: RootState) => state.servers.servers)

    const {handleSubmit, register, watch, getValues, setValue} = useForm<EditForm>({
        mode: "onBlur",
    })

    const [prevServerId, setPrevServerId] = useState<string>(undefined)
    let defaultFormValues: EditForm = undefined

    if (serverId !== prevServerId) {
        const server = servers.find((server: AuthorizationServer) => server.id === serverId)
        if (server !== undefined) {
            setValue("name", server.name)
            setValue("authorizationUrl", server.authorizationUrl)
            setValue("tokenUrl", server.tokenUrl)
            setPrevServerId(serverId)
        }
        console.log("Change server to", serverId, server)
    }

    // useEffect(() => {
    //     watch((data: EditForm) => {
            

    //         console.log("Dispatch", data)
    //     })
    // }, [watch])

    const onSubmit = (data: any) => {
        const newServer: AuthorizationServer = {
            ...data,
            id: serverId
        }
        dispatch(setServer(newServer))
    }
    
    return (
        <>
            <h1>
                <MdStorage />
                {getValues().name || "Unbekannter Server"}
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                <legend>Name</legend>

                    <label htmlFor="inputName">Name des Servers</label>
                    <input type="text" {...register("name")} />
                </fieldset>

                <fieldset>
                    <legend>Endpunkte</legend>

                    <label htmlFor="inputAuthEndpoint">Authorization Endpoint</label>
                    <input type="text" {...register("authorizationUrl")} />
                    <p>Der Endpunkt zur Authorization URL. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id vero quasi placeat. Quia repellat nostrum doloremque ullam saepe.</p>

                    <label htmlFor="inputName">Token Endpoint</label>
                    <input type="text" {...register("tokenUrl")} />
                </fieldset>

                <input type="submit" value="Übernehmen" className="btn-primary"/>
            </form>
        </>
    )
}

export default EditServerView