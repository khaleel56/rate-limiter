exports.fetchUsers = async (req, res) => {
    try {
        const usersList = ['Shaik', 'James']
        return res.status(200).json({ message: 'success', list: usersList })

    } catch (err) {
        console.log('error occured', err)
        return res.status(500).json({ "error": err })
    }
}

exports.updateUsersList = async (req, res) => {
    try {
        const usersList = ['Shaik', 'James', 'Banner']
        return res.status(200).json({ message: 'success', list: usersList })

    } catch (err) {
        console.log('error occured', err)
        return res.status(500).json({ "error": err })
    }
}