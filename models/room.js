import mongoose from 'mongoose';




const roomSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter room name'],
        trim: true,
        maxLength: [100, 'Room name can not exceed 100 characters'],
    },

    price: {
        type: Number,
        required: [true, 'Please enter room price'],
        maxLength: [4, 'Room name can not exceed 4 characters'],
        default: 0.0
    },

    description: {
        type: String,
        required: [true, 'Please enter room description'],
    },

    address: {
        type: String,
        required: [true, 'Please enter room address'],
    },

    guestCapacity: {
        type: Number,
        required: [true, 'Please enter room guest capacity'],
    },

    numOfBeds: {
        type: Number,
        required: [true, 'Please enter number of beds in room'],
    },

    numOfBeds: {
        type: Number,
        required: [true, 'Please enter number ofbeds in room'],
    },

    internet: {
        type: Boolean,
        default: false,
    },

    breakfast: {
        type: Boolean,
        default: false,
    },

    airCondition: {
        type: Boolean,
        default: false,
    },

    petsAllowe: {
        type: Boolean,
        default: false,
    },

    roomCleaning: {
        type: Boolean,
        default: false,
    },

    ratings: {
        type: Number,
        default: 0,
    },

    numOfReviews: {
        type: Number,
        default: 0,
    },
    images: [
        {
            publick_id: {
                type: String,
                requred: true
            },
            url: {
                type: String,
                requred: true
            }
        }
        
    ],

    category: {
        type: String,
        required: [true, 'Please enter room Category'],
        enum: {
            values: [
                'King',
                'Single',
                'Twins'
            ],
            message: 'Please select correct category for room'
        }
    },

    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },

            name: {
                type: String,
                required: true
            },

            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }


    

})

export default mongoose.model.Room || mongoose.model('Room', roomSchema);