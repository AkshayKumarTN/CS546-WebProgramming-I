// In this file, you must perform all client-side validation for every single form input (and the role dropdown) on your pages. The constraints for those fields are the same as they are for the data functions and routes. Using client-side JS, you will intercept the form's submit event when the form is submitted and If there is an error in the user's input or they are missing fields, you will not allow the form to submit to the server and will display an error on the page to the user informing them of what was incorrect or missing.  You must do this for ALL fields for the register form as well as the login form. If the form being submitted has all valid data, then you will allow it to submit to the server for processing. Don't forget to check that password and confirm password match on the registration form!
document.addEventListener("DOMContentLoaded", () => {

    const signinForm = document.getElementById("signin-form");
    const signupForm = document.getElementById("signup-form");
    const errorMessage = document.getElementById("errorMessage");
    const errorTag = document.getElementById("error");
    const showError = (message) => {
        errorTag.innerHTML = "Error: " + message;
        errorTag.hidden = false;

    }
    if (errorMessage && errorMessage.innerHTML) {
        errorMessage.hidden = false;
    }
    const inputStringCheck = (str, fieldName) => {
        if (str == null || str === 'undefined') {
            showError(`${fieldName} field need to have valid values)`);
            return false;
        }
        if (typeof str !== 'string') {
            showError(`${fieldName} Input type is not a String.`);
            return false;
        }
        if (!str.trim().length > 0) {
            showError(`${fieldName} Input String is Empty`);
            return false;
        }
        if (str.trim().includes('  ')) {
            showError(`${fieldName} Input is Invalid - multiple consecutive spaces are not allowed.`);
            return false;
        }
        return true;
    }
    // name....................
    const CheckName = (name, fieldName) => {
        if (!inputStringCheck(name, fieldName)) return false;
        name = name.trim();
        if (name.length < 2 || name.length > 20) {
            showError(`${fieldName} must be between 2 and 20 characters.`);
            return false;
        }
        if (!/^[a-zA-Z]+$/.test(name)) {
            showError(`${fieldName} must contain only letters (no spaces, no numbers, no special characters).`);
            return false;
        }
        return true;
    }
    const CheckUserId = (userId) => {
        if (!inputStringCheck(userId, 'UserId')) return false;
        userId = userId.trim();
        if (userId.length < 5 || userId.length > 10) {
            showError("UserId must be between 5 and 10 characters.");
            return false;
        }
        if (!/^[a-zA-Z0-9]+$/.test(userId)) {
            showError('UserId must contain only letters and positive whole numbers.');
            return false;
        }
        return true;
    }
    // password ....................
    const CheckPassword = (password) => {
        if (!inputStringCheck(password, 'password')) return false;
        if (password.includes(' ')) {
            showError('password Input is Invalid - spaces are not allowed.');
            return false;
        }
        if (/\s/.test(password)) {
            showError('Password cannot contain spaces.');
            return false;
        }
        if (password.length < 8) {
            showError('Password must be at least 8 characters long.');
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            showError('Password must contain at least one uppercase letter.');
            return false;
        }
        if (!/[0-9]/.test(password)) {
            showError('Password must contain at least one number.');
            return false;
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            showError('Password must contain at least one special character.');
            return false;
        }
        return true;
    }

    // CheckFavoriteQuote
    const CheckFavoriteQuote = (favoriteQuote) => {
        if (!inputStringCheck(favoriteQuote, 'favoriteQuote')) return false;
        favoriteQuote = favoriteQuote.trim();
        if (favoriteQuote.length < 20 || favoriteQuote.length > 255) {
            showError('Favorite Quote must be between 20 and 255 characters.');
            return false;
        }
        return true;
    }
    const CheckHexColorCode = (color) => {
        return typeof color === 'string' && /^#[0-9A-Fa-f]{6}$/.test(color);
    }
    const CheckThemePreference = (themePreference) => {
        if (themePreference === null || typeof themePreference !== 'object' || Array.isArray(themePreference)) {
            showError('themePreference must be a non-Empty object.');
            return false;
        }
        const keys = Object.keys(themePreference);
        if (keys.length !== 2 || !keys.includes('backgroundColor') || !keys.includes('fontColor')) {
            showError('themePreference must contain only "backgroundColor" and "fontColor" properties.');
            return false;
        }
        if (!inputStringCheck(themePreference.backgroundColor, 'backgroundColor hex color code')) return false;
        if (!inputStringCheck(themePreference.fontColor, 'fontColor hex color code')) return false;
        if (!this.CheckHexColorCode(themePreference.backgroundColor) || !this.CheckHexColorCode(themePreference.fontColor)) {
            showError('backgroundColor and fontColor must be a valid hex color code.');
            return false;
        }
        if (themePreference.backgroundColor.toLowerCase() === themePreference.fontColor.toLowerCase()) {
            showError('backgroundColor and fontColor cannot be the same color.');
            return false;
        }
        return true;
    }
    const CheckRole = (role) => {
        if (!inputStringCheck(role, 'role')) return false;
        role = role.trim().toLowerCase();
        if (role !== 'superuser' && role !== 'user') {
            showError('Role must be either "superuser" or "user".');
            return false;
        }
        return true;
    }


    if (signinForm) {

        signinForm.addEventListener("submit", (event) => {
            try {
                errorTag.hidden = true;
                errorMessage.hidden = true;
                errorMessage.innerHTML = null;
                const userId = document.getElementById("userId");
                const password = document.getElementById("password");

                const userIdValue = userId.value.trim();
                const passwordValue = password.value;
                if (!CheckUserId(userIdValue)) {
                    event.preventDefault();
                    return;
                }
                if (!CheckPassword(passwordValue)) {
                    event.preventDefault();
                    return;
                }

            } catch (err) {
                showError(typeof err === "string" ? err : "Invalid input.");
                return;
            }

        });
    }
    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            try {
                errorTag.hidden = true;
                const userId = document.getElementById("userId");
                const password = document.getElementById("password");
                const firstName = document.getElementById("firstName");
                const lastName = document.getElementById("lastName");
                const confirmPassword = document.getElementById("confirmPassword");
                const favoriteQuote = document.getElementById("favoriteQuote");
                const backgroundColorId = document.getElementById("backgroundColor");
                const fontColorId = document.getElementById("fontColor");
                const role = document.getElementById("role");

                const userIdValue = userId.value.trim();
                const passwordValue = password.value;
                const confirmPasswordValue = confirmPassword.value;
                const firstNameValue = firstName.value.trim();
                const lastNameValue = lastName.value.trim();
                const quoteValue = favoriteQuote.value.trim();
                const backgroundColor = backgroundColorId.value.trim();
                const fontColor = fontColorId.value.trim();
                const roleValue = role.value.trim();

                if (!CheckName(firstNameValue, 'First Name')) {
                    event.preventDefault(); return;
                }
                if (!CheckName(lastNameValue, 'Last Name')) {
                    event.preventDefault(); return;
                }
                if (!CheckUserId(userIdValue)) {
                    event.preventDefault(); return;
                }
                if (!CheckPassword(passwordValue)) {
                    event.preventDefault(); return;
                }
                if (passwordValue !== confirmPasswordValue) {
                    showError("Password and Confirm Password do not match.");
                    event.preventDefault(); return;
                }
                if (!CheckFavoriteQuote(quoteValue)) {
                    event.preventDefault(); return;
                }
                if (!CheckHexColorCode(backgroundColor) || !CheckHexColorCode(fontColor)) {
                    showError("Both Background and Font Colors must be valid hex codes.");
                    event.preventDefault(); return;
                }
                if (backgroundColor.toLowerCase() === fontColor.toLowerCase()) {
                    showError("Background and Font colors must be different.");
                    event.preventDefault(); return;
                }
                if (!CheckRole(roleValue)) {
                    event.preventDefault(); return;
                }
                const addthemePreference = (name, value) => {
                    let input = document.querySelector(`input[name="${name}"]`);
                    if (!input) {
                        input = document.createElement("input");
                        input.type = "hidden";
                        input.name = name;
                        signupForm.appendChild(input);
                    }
                    input.value = value;
                };

                addthemePreference("themePreference[backgroundColor]", backgroundColor);
                addthemePreference("themePreference[fontColor]", fontColor);

            } catch (err) {
                showError(typeof err === "string" ? err : "Invalid input.");
                return;
            }

        });
    }
});