
enum AuthorizationGrantTypes {
    AuthorizationCodeGrant,
    ImplicitGrant,
    ResourceOwnerPasswordCredentialsGrant,
    ClientCredentialsGrant,
    
}

type ClientConfiguration = {
    clientId: string,
    clientSecret?: string,

}