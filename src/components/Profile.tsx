import { FaAt } from "@react-icons/all-files/fa/FaAt";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import React, { FC } from "react";

interface ProfileProps {
	name: string;
	phone: string;
	email: string;
	services: string[];
}

const Profile: FC<ProfileProps> = ({ name, phone, email, services }) => {
	return (
		<div className="flex flex-col gap-10 p-10 m-5 rounded-md bg-white">
			<h2 className="text-2xl">{name}</h2>
			<div className="flex flex-col gap-2">
				<h3 className="text-lg">Информация</h3>
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<FaPhone className="rotate-90" />
						<div>{phone}</div>
					</div>
					<div className="flex items-center gap-2">
						<FaAt />
						<div>{email}</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="text-lg">Дейности</h3>
				<ul className="flex flex-col gap-2 pl-4 list-disc">
					{services.map(service => (
						<li key={service}>{service}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Profile;
