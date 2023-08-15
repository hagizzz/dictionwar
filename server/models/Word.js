import { Sequelize, DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Word = sequelize.define('words', {
    value: {
        type: DataTypes.STRING,
        allowNull: false
    },  
}, {
    createdAt: false,
    updatedAt: false,
    indexes: [
        {
            unique: true,
            fields: ['value']
        }
    ]
})

sequelize.sync().then(() => {
    console.log('words table created successfully!')
}).catch((error) => {
    console.error('Unable to create table:', error)
})

export default Word