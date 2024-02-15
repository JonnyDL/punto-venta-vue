import {Schema, model} from 'mongoose';

const tipSchema = new Schema({
    id_paid_tip:{
        type: Schema.Types.Decimal128,
        require: true,
        
    },
    date_paid:{
        type: Date,
        required: true,
        default: Date.now,
    },
    total_amount:{
        type: Schema.Types.Decimal128,
        require: true
    }
});

export default model('Tip', tipSchema);