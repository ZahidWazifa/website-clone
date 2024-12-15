import Image from "next/image";
import Link from "next/link";
const Logo = () =>{
    return(
        <Link
        href="/">
            <Image
            src="/image/bird-logo.png" 
            alt="logo"
            width={80}
            height={80}
            className="ar-6"
            />
        </Link>
    );
}
export default Logo;