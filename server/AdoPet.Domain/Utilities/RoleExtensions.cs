using AdoPet.Domain.Enums;

namespace AdoPet.Domain.Utilities;

    public static class RoleExtensions
    {
        public static string ToStringEnum(this Role role)
    {
        switch(role)
        {
            case Role.Admin:
                return "Admin";
            case Role.User:
                return "User";    
            default:
                return role.ToString();
        }
    }
    }
