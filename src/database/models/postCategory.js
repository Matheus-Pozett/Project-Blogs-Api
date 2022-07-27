const { DataTypes } = require('sequelize');

const Attributes = {
  postId: {
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:false,
    references: {
    model:'BlogPost',
    key:'id'
    },
  },
  categoryId: {
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:false,
    references: {
      model:'Category',
      key:'id'
    }
  }
}

module.exports = (sequelize) => {
    const PostCategories = sequelize.define('PostCategory', Attributes, 
    {
      tableName: 'PostsCategories',
      timestamps: false,
    });
  
    PostCategories.associate = (models) => {
      models.Category.belongsToMany(
        models.BlogPost,
        { foreignKey: 'categoryId', otherKey: 'postId', through: PostCategories, as: 'posts' },
      );
  
      models.BlogPost.belongsToMany(
        models.Category,
        { foreignKey: 'postId', otherKey: 'categoryId', through: PostCategories, as: 'categories' },
      );
    };
  
    return PostCategories;
  };