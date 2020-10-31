import moment from 'moment';
class Order {
    constructor(id, ownerId, items, totalAmount, date, fullname, phone) {
        this.id = id;
        this.ownerId = ownerId;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = moment(date).format('MMMM Do YYYY, hh:mm');
        this.fullname = fullname,
        this.phone = phone
    }

    get  readableDate() {
        // return this.date.toLocaleDateString('en-EN', {
        //     year: 'numeric',
        //     month: 'long',
        //     day: 'numeric',
        //     hour: '2-digit',
        //     minute: '2-digit'
        // })
        return moment(this.date).format('MMMM Do YYYY, hh:mm');
    }
}

export default Order;