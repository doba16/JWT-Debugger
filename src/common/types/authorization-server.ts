/**
 * An authorization server.
 * 
 * Holds all details about the server that are needed to obtain a token.
 */
export interface AuthorizationServer {
    /**
     * Id associated to the server.
     * This id is used internally to identify a server.
     */
    id: string,
    
    /**
     * The display name of the server
     */
    name: string,

    /**
     * The url of the authorization endpoint
     */
    authorizationUrl?: string,

    /**
     * The url of the token endpoint
     */
    tokenUrl: string
}