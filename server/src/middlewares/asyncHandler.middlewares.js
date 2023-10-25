/**
 * @param {(req: import("express").Request, res:import("express").Response, next:import("express").NextFunction) => void} requestHandler
 */
export const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
