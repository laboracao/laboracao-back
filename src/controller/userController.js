const User = require("../schemas/userService");
const horusController = require("./hoursController");
const Term = require("../schemas/termService");

const postUser = async (req, res) => {
    const { email } = req.body;
        
        const created_at = new Date();
        const updated_at = created_at;
        const term_accept = false;

        let user = await User.findOne({email});

        if (!user) {
            user = await User.create({
                email,
                term_accept,
                created_at,
                updated_at
            });

            user.save();
            return res.json(user);
        } else {
            return res.status(400).send("Usuário já cadastrado");
        }
}

module.exports = {
    async post(req, res) {
        await postUser(req, res);
    },

    async put(req, res) {

        const {email, gl_List, exercises, term_accept} = req.body;

        const { id } = req.params;
        let exercises_created;

        let user = await User.findById(id);

        if (user) {
            const updated_at = new Date();
            await User.findByIdAndUpdate(id, { email, gl_List, exercises, exercises_created, term_accept, updated_at });
            const updatedUser = await User.findById(id);
            return res.send(updatedUser);
        } else {
            return res.send("Usuário não encontrado");
        }

    },

    async get(req, res) {

        const { id } = req.params;

        const project_data = {
            gl_List: 1,
            exercises: 1,
            exercises_created: 1
        }

        let user = await User.findById(id, project_data);

        if (user) {
            return res.json(user);
        } else {
            return res.send("Usuário não encontrado");
        }

    },

    async getExercisesbyUserId(req, res){
        const { id } = req.params;

        const project_data = {
            exercises: 1,
            exercises_created: 1
        }

        let user = await User.findById(id, project_data);
        let exercisesList = [];

        user?.exercises?.map((item) => {
            item?.exercises.map((subitem) => {
                exercisesList.push(subitem);
            });
        });

        if (user) {
            return res.json(exercisesList);
        } else {
            return res.send("Usuário não encontrado");
        }
    },

    async getExercisebyExerciseId(req, res){
        const { id, exercise_id } = req.params;

        const project_data = {
            exercises: 1,
            exercises_created: 1
        }

        let user = await User.findById(id, project_data);
        let exercisesList = [];

        user?.exercises?.map((item) => {
            item?.exercises.map((subitem) => {
                exercisesList.push(subitem);
            });
        });

        let exercise = exercisesList.find((item) => {return item.id == exercise_id});
        
        if (exercise) {
            return res.json(exercise);
        } else {
            return res.send("Exercício não encontrado");
        }
    },

    async login(req, res) {
        const {email} = req.body;
        let user = await User.findOne({ email });
        if (user?.email === email) {
            const id = user?._id.valueOf();
            await User.findByIdAndUpdate(id, { online: true })
            return res.status(200).json(user);
        } else {
            await postUser(req, res);
        }
    },

    async logout(req, res) {
        const { id } = req.params;
        let user = await User.findById(id);
        await User.findByIdAndUpdate(id, { online: false });
        return res.status(200).json(user);
    },

    async getUsersOnline(req, res) {
        let users = await User.find({ online: { "$eq": true } })
        return res.status(200).json(users);
    },

    async refreshConnection(params) {

        const { user_id, connection_id } = params;

        let user = await User.findById(user_id);
        if (user) {
            await User.findByIdAndUpdate(user_id, { connection_id });
        }
    },

    async finishExercises(req, res){
        const { id } = req.params;
        const exercises = [];

        let user = await User.findById(id);

        if (user) {
            await User.findByIdAndUpdate(id, {exercises});
            const updatedUser = await User.findById(id);
            return res.send(updatedUser);
        } else {
            return res.send("Usuário não encontrado");
        }
    }
}