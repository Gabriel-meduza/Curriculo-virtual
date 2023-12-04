import {Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


export default function Imagem() {
  return (
    <div>
      <Avatar className="w-32 h-18 border-8 border-[#000969]">
        <AvatarImage src="https://media.licdn.com/dms/image/C4E03AQGvW4xfMWe9xw/profile-displayphoto-shrink_800_800/0/1620651588599?e=1707350400&v=beta&t=dv7eQKSUu8e-jcN8viC6CRf8s9jxPmzEdtk4Lw08X5g" />
        <AvatarFallback>GB</AvatarFallback>
      </Avatar>
    </div>
  );
}
