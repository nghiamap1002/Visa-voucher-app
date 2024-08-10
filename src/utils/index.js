export function isValidZipCode(sZip) {
	return new RegExp('^[0-9]{5}(?:-[0-9]{4})?$').test(sZip);
}

export const validatePhone = (phone) => {
	const regex = /^(\+?\d{1,4}[-. ]?)?(\(?\d{1,4}\)?[-. ]?)?(\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9})$/;

	if (regex.test(phone)) {
		return true;
	} else {
		return false;
	}
};

export const firstCaptialize = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
  };