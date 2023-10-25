//This catches errors for all async functions. It returns an anonymous fxn that sits and waits until the the calling function (eg. getAllNotes) has been called by express.
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
