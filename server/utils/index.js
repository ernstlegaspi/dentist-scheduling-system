export const clientError = (res, code = 400, message = "Invalid Credentials") => res.status(code).json({ message })

export const serverError = (res, code = 500, message = "Internal Server Error") => res.status(code).json({ message })

export const success = (res, code, result) => res.status(code).json(result)

export const serverError500 = (res, callback) => {
	try {
		callback()
	}
	catch(e) {
		return serverError(res)
	}
}
