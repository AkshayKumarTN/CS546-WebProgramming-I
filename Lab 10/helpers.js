//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.
import { ObjectId } from 'mongodb';

const exportedMethods = {

    inputStringCheck(str, fieldName) {
        if (str == null || str === 'undefined') throw `Error: ${fieldName} field need to have valid values)`;
        if (typeof str !== 'string') throw `Error: ${fieldName} Input type is not a String.`;
        if (!str.trim().length > 0) throw `Error: ${fieldName} Input String is Empty`;
        if (str.trim().includes('  ')) throw `Error: ${fieldName} Input is Invalid - multiple consecutive spaces are not allowed.`;
    },
    // Id Check...............
    checkId(id) {
        this.inputStringCheck(id, 'ID');
        id = id.trim();
        if (!ObjectId.isValid(id)) throw 'Error: invalid object ID';
        return id;
    },

    // name....................
    CheckName(name, fieldName) {
        this.inputStringCheck(name, fieldName);
        name = name.trim();
        if (name.length < 2 || name.length > 20) {
            throw `Error: ${fieldName} must be between 2 and 20 characters.`;
        }
        if (!/^[a-zA-Z]+$/.test(name)) {
            throw `Error: ${fieldName} must contain only letters (no spaces, no numbers, no special characters).`;
        }
    },
    // userId ....................
    CheckUserId(userId) {
        this.inputStringCheck(userId, 'UserId');
        userId = userId.trim();
        if (userId.length < 5 || userId.length > 10) {
            throw 'Error: UserId must be between 5 and 10 characters.';
        }
        if (!/^[a-zA-Z0-9]+$/.test(userId)) {
            throw 'Error: UserId must contain only letters and positive whole numbers.';
        }
    },
    // password ....................
    CheckPassword(password) {
        this.inputStringCheck(password, 'password');
        password = password.trim();
        if (/\s/.test(password)) {
            throw 'Error: Password cannot contain spaces.';
        }
        if (password.length < 8) {
            throw 'Error: Password must be at least 8 characters long.';
        }
        if (!/[A-Z]/.test(password)) {
            throw 'Error: Password must contain at least one uppercase letter.';
        }
        if (!/[0-9]/.test(password)) {
            throw 'Error: Password must contain at least one number.';
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            throw 'Error: Password must contain at least one special character.';
        }
    },
    CheckFavoriteQuote(favoriteQuote) {
        this.inputStringCheck(favoriteQuote, 'favoriteQuote');
        favoriteQuote = favoriteQuote.trim();
        if (favoriteQuote.length < 20 || favoriteQuote.length > 255) {
            throw 'Error: Favorite Quote must be between 20 and 255 characters.';
        }
    },
    CheckHexColorCode(color) {
        return typeof color === 'string' && /^#[0-9A-Fa-f]{6}$/.test(color);
    },
    CheckThemePreference(themePreference) {
        if (themePreference === null || typeof themePreference !== 'object' || Array.isArray(themePreference)) {
            throw 'Error: themePreference must be a non-Empty object.';
        }
        const keys = Object.keys(themePreference);
        if (keys.length !== 2 || !keys.includes('backgroundColor') || !keys.includes('fontColor')) {
            throw 'Error: themePreference must contain only "backgroundColor" and "fontColor" properties.';
        }
        this.inputStringCheck(themePreference.backgroundColor, 'backgroundColor hex color code');
        this.inputStringCheck(themePreference.fontColor, 'fontColor hex color code');
        if (!this.CheckHexColorCode(themePreference.backgroundColor) || !this.CheckHexColorCode(themePreference.fontColor)) {
            throw 'Error: backgroundColor and fontColor must be a valid hex color code.';
        }
        if (themePreference.backgroundColor.toLowerCase() === themePreference.fontColor.toLowerCase()) {
            throw 'Error: backgroundColor and fontColor cannot be the same color.';
        }
    },
    CheckRole(role) {
        this.inputStringCheck(role, 'role');
        role = role.trim().toLowerCase();
        if (role !== 'superuser' && role !== 'user') {
            throw 'Error: Role must be either "superuser" or "user".';
        }
    }
}

export default exportedMethods;
