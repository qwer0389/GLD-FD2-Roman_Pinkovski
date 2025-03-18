'use strict';

function Participant(name, email) {
    this.name = name;
    this.email = email;
}

function Event(NameEvent, DateEvent) {
    this.NameEvent = NameEvent;
    this.DateEvent = DateEvent;
    this.participants = [];

    this.addParticipant = function(participant) {
        if (participant instanceof Participant) {
            this.participants.push(participant);
        } else {
            console.error(`Member ${this.NameEvent} from ${this.DateEvent} must be an instance Participant`);
        }
    };}

    this.listParticipants = function() {
        if (this.participants.length === 0) {
        return `There are no members in the event "${this.NameEvent}" from ${this.DateEvent}.`;
    }
    const participantNames = this.participants.map(participant => participant.name);
    return `Members "${this.NameEvent}" from ${this.DateEvent}: ${participantNames.join(', ')}.`;
}

this.findParticipantEmail=function (email){
    for(key of this.participants) {
        if (email === key.email) {
            console.log(`The name of the member is: ${key.email}`);
        }
    }
}

const Natalia = new Participant('Natalia', 'natalizayceva@ggg.com');
const Alex = new Participant('Alex', 'alexyceva@ggg.com');
const Igora = new Participant('Igora', 'ignora@ggg.com');
const Meet1 = new Event('Meet', '11.11.1111');

console.log(Meet1);
Meet1.addParticipant(Natalia);
Meet.addParticipant(Alex);
Meet.addParticipant(Igora);

Meet.findParticipantEmail(email)