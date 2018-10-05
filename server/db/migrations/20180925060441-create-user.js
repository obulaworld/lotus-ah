module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING,
      allowNull: true
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: true
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true
    },
    bio: {
      type: Sequelize.STRING,
      allowNull: true
    },
    userImage: {
      type: Sequelize.STRING,
      allowNull: true
    },
    isPremium: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    isSuspended: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    isActivated: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    favouriteTags: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, { freezeTableName: true }),
  down: queryInterface => queryInterface.dropTable('Users')
};
