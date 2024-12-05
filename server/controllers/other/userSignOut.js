
let userSignOutController = async function (req, res) {
    try{
        res.clearCookie("token")
        res.json({
            message: "User Signed Out",
            error: false,
            success: true,
            data: [],
        })
    } catch(err) {
        res.json({
          message: err.message,
          error: true,
          success: false,
        });
    }
}

module.exports = userSignOutController