import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    username : string;

    @Column()
    password: string; // Change from number to string

    @Column()
    phonenumber: number;

    @ManyToOne(() => UserType)
    usertype: UserType;

    @OneToMany(() => Complaint, (complaint) => complaint.user)
    complaints: Complaint[];

    @ManyToOne(() => Room, (room) => room.users)
    @JoinColumn()
    roomNumber: Room;

    @OneToMany(() => Notification, (notification) => notification) 
    notifications: Notification[]; 
    room: any;
}

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  room : number;

  @OneToMany(() => User, (user) => user.roomNumber)
  users: User[]; 
}

@Entity()
export class notification {
  @PrimaryGeneratedColumn()
  id : number ;

  @ManyToOne(() => ComplaintStatus, (complaintStatus) => complaintStatus.complaints)
  @JoinColumn()
  complaintStatus: ComplaintStatus;

  @ManyToOne(() => User, (user) => user.notifications)
  user: User;

  @ManyToOne(() => Complaint, (complaint) => complaint.notifications)
  @JoinColumn()
  complaint: Complaint;
}

@Entity()
export class Complaint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user)
  user: User;

  @ManyToOne(() => ComplaintStatus, (complaintStatus) => complaintStatus.complaints)
  @JoinColumn()
  complaintStatus: ComplaintStatus;
  notifications: any;
}

@Entity()
export class ComplaintStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @OneToMany(() => Complaint, (complaint) => complaint.complaintStatus)
  complaints: Complaint[];

}


@Entity()
export class UserType {
    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
  status: string; 
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

