
export enum AuthorizationGrantType {
    AuthorizationCodeGrant,
    ImplicitGrant,
    ResourceOwnerPasswordCredentialsGrant,
    ClientCredentialsGrant,

}

export type ClientConfiguration = {
    /**
     * Id of the client. 
     * @see(https://www.rfc-editor.org/rfc/rfc6749#section-2.2)
     */
    clientId: string,
    
    /**
     * Secret of the client. Undefined, if client is a public client.
     * @see(https://www.rfc-editor.org/rfc/rfc6749#section-2.3.1)
     */
    clientSecret?: string,

    /**
     * Grant type to use
     */
    grantType: AuthorizationGrantType
}