function User(username,socket) {
    this.username = username;
    this.socket = socket;
    this.address = socket.handshake.address;
    this.UUID = '';
}
module.exports = User;