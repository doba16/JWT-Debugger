/**
 * Different grant types used by the authorization server.
 */
export enum AuthorizationGrantType {
    AuthorizationCodeGrant,
    ImplicitGrant,
    ResourceOwnerPasswordCredentialsGrant,
    ClientCredentialsGrant,

}

/**
 * The configuration that describes an OAuth2 client.
 */
export interface ClientConfiguration {
    /**
     * Id associated to the client.
     * This id is used internally to identify a client.
     */
    id: string,
    
    /**
     * The display name of the client.
     */
    name: string,

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