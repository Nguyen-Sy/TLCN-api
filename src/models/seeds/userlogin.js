const { Types } = require("mongoose")
const { userLoginModel } = require("../index")

const seedUserLogin = async () => {
	await userLoginModel.collection.drop()
	await userLoginModel.create({
		_id: new Types.ObjectId("65f7ec34086229fc88e93a48"),
		local: {
			email: "admin@gmail.com",
			password:
				"$2b$10$7I53D3UizrFdpODzgzsfRu.lgNLxyx9Y76Av2.thoDDhvTZ/IfMQO",
		},
		role: "0003",
		verified: true,
		token: "38e51522-0fee-44fd-84bb-c3db5ef1c56e",
	})
	await userLoginModel.create({
		_id: new Types.ObjectId("65f7ec34086229fc88e93a4a"),
		local: {
			email: "shop@gmail.com",
			password:
				"$2b$10$7I53D3UizrFdpODzgzsfRu.lgNLxyx9Y76Av2.thoDDhvTZ/IfMQO",
		},
		role: "0002",
		verified: true,
		token: "31e51522-0fee-44fd-84bb-c3db5ef1c56e",
	})
	await userLoginModel.create({
		_id: new Types.ObjectId("65f7ec34086229fc88e93a4c"),
		local: {
			email: "user@gmail.com",
			password:
				"$2b$10$7I53D3UizrFdpODzgzsfRu.lgNLxyx9Y76Av2.thoDDhvTZ/IfMQO",
		},
		role: "0001",
		verified: true,
		token: "38e51522-0fee-44fd-84bb-c3db5ef1c56e",
	})
}

module.exports = seedUserLogin
