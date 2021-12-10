export type UserDTO = {
  uid: string;
  email: string | null;
  name: string | null;
  provider: string;
  avatar: string | undefined;
};

export type FirebaseUser = any | null;
class UserMapper {
  public static mapToDTO(raw: any): UserDTO {
    const { uid, email, displayName, providerData, photoURL } = raw;
    const provider = providerData[0].providerId;

    return {
      uid,
      email,
      name: displayName,
      provider,
      avatar: photoURL ?? undefined,
    };
  }
}

export default UserMapper;
