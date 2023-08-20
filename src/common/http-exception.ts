class HttpException extends Error {
  statusCode?: number;
  body: {
    success: boolean;
    message: string;
  };

  constructor(statusCode: number, message: string, success: boolean) {
    super(message);
    this.statusCode = statusCode;
    this.body.success = success;
    this.body.message = message;
  }
}

export { HttpException as default };
