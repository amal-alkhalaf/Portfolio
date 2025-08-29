import { IoCallOutline } from "react-icons/io5"
import type { ContactProps } from "../../interfaces"
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi"
import { useRef } from "react";
import emailjs from 'emailjs-com';
import { FaTelegramPlane } from "react-icons/fa";

const Contact = ({ number, email,user_name, address }: ContactProps) => {
	const formRef = useRef<HTMLFormElement>(null);

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();

		if (!formRef.current) return;
		emailjs.init('Z_yqtgkC4ZdOxuTXl')
		emailjs.sendForm('service_ykqcfty', 'template_qoxdsgy', formRef.current)
			.then(
				(result) => {
					console.log(result)
					alert('This message has been sent successfully.');
				},
				(error) => {
					console.log(error)
					alert('An error occurred, please try again later.');
				}
			);

		console.log(formRef.current.value)
	}

	return (
		<div className="w-full h-full py-[80px] flex flex-col gap-14 px-[20px] md:px-[70px] ">
			<div className="flex flex-col gap-2 text-center lg:text-start">
				<p className="text-[20px] font-medium text-[#0C96E2] ">Contact</p>
				<h1 className="text-mainText dark:text-white text-[40px] font-semibold">Let’s Discuss Your <span className="text-[#0C96E2]">Project</span></h1>
			</div>

			<div className="w-full h-full flex flex-col lg:flex-row ">
				<div className="lg:w-[50%] w-full h-full flex flex-col justify-between pb-7 gap-14">
					<div className="w-[85%] h-[56px] flex gap-[20px]">
						<div className="h-full w-[62px] bg-[#0C96E2] flex items-center justify-center rounded-lg"><IoCallOutline className="text-white text-[35px]" /></div>
						<div className="h-full flex flex-col">
							<p className="text-[#92929D]">Call me</p>
							<p className="font-medium">{number}</p>
						</div>
					</div>

					<div className="w-[85%] h-[56px] flex gap-[20px]">
						<div className="h-full w-[62px] bg-[#0C96E2] flex items-center justify-center rounded-lg"><HiOutlineMail className="text-white text-[35px]" /></div>
						<div className="h-full flex flex-col">
							<p className="text-[#92929D]">Email me</p>
							<p className="font-medium">{email}</p>
						</div>
					</div>

					<div className="w-[85%] h-[56px] flex gap-[20px]">
						<div className="h-full w-[62px] bg-[#0C96E2] flex items-center justify-center rounded-lg"><FaTelegramPlane className="text-white font-light text-[35px]" /></div>
						<div className="h-full flex flex-col">
							<p className="text-[#92929D]">Send me</p>
							<p className="font-medium">{user_name}</p>
						</div>
					</div>

					<div className="w-[85%] h-[56px] flex gap-[20px]">
						<div className="h-full w-[62px] bg-[#0C96E2] flex items-center justify-center rounded-lg"><HiOutlineLocationMarker className="text-white font-light text-[35px]" /></div>
						<div className="h-full flex flex-col">
							<p className="text-[#92929D]">Address</p>
							<p className="font-medium">{address}</p>
						</div>
					</div>
				</div>


				<form action="" ref={formRef} onSubmit={sendEmail} className="w-full lg:w-[65%] h-full flex flex-col items-center lg:items-start gap-6 ">
					<div className="w-full flex flex-col lg:flex-row gap-4">
						<input type="text" name="title" placeholder="Title" className="w-full border-[0.3px] text-[#92929D] placeholder:text-[#92929D]  border-[#BEC0BF] py-4 pl-[27px] rounded-lg outline-[#0C96E2]" required />
						<input type="time" name="time" className="w-full border-[0.3px] border-[#BEC0BF] py-4 p-[27px] text-[#92929D]  rounded-lg outline-[#0C96E2]" required />
					</div>
					<div className="w-full flex flex-col lg:flex-row gap-4">
						<input type="text" name="name" placeholder="Full Name" className=" w-full border-[0.3px] border-[#BEC0BF] py-4 pl-[27px] text-[#92929D] placeholder:text-[#92929D] rounded-lg outline-[#0C96E2]" required />
						<input type="email" name="email" placeholder="Your Email" className="w-full border-[0.3px] border-[#BEC0BF] py-4 pl-[27px] text-[#92929D] placeholder:text-[#92929D] rounded-lg outline-[#0C96E2]" required />
					</div>
					<textarea name="message" id=""  placeholder="Your Message" className="w-full h-[170px] border-[0.3px] placeholder:text-[#92929D] text-[#92929D] border-[#BEC0BF] pt-4 pl-[27px] rounded-lg outline-[#0C96E2]"></textarea>
					<button type="submit" className="w-[200px] h-[50px] bg-[#0C96E2] text-white font-medium cursor-pointer flex items-center justify-center rounded-lg ">Send Message</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
