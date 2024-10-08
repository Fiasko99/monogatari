module.exports = class ApiError extends Error {
  status;
  error;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, 'Пользователь не авторизован')
  }

  static AccessDenied() {
    return new ApiError(403, 'Доступ запрещен')
  }

  static NotFound() {
    return new ApiError(404, 'Не удалось найти')
  }

  static AlreadyExist() {
    return new ApiError(400, 'Уже существует');
  }

  static InputError(errors) {
    return new ApiError(400, 'Ошибка ввода', errors);
  }

  static BadRequest(message, errors) {
    return new ApiError(400, message, errors);
  }

  static ServerError() {
    return new ApiError(500, 'Ошибка сервера', e)
  }

}