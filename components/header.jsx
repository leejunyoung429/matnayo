import Icons from "@/components/icons/header-icons";
import Image from "next/image";

const { BookmarkIcon, CalendarIcon, MypageIcon } = Icons;

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "16px 20px",
};

const iconContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const logoContainerStyle = {
  width: "72px",
  height: "20px",
};

function Header() {
  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <Image
          src="/logo-matnayo.png"
          alt="logo"
          layout="responsive"
          width={72}
          height={20}
        />
      </div>
      <div style={iconContainerStyle}>
        <BookmarkIcon />
        <CalendarIcon />
        <MypageIcon />
      </div>
    </header>
  );
}

export default Header;
