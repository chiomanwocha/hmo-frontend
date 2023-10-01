import facebook from "../../../assets/svgs/facebook.svg";
import whatsapp from "../../../assets/svgs/whatsapp.svg";
import telegram from "../../../assets/svgs/telegram.svg";
import Button from "../../common/Button";

const Share = () => {
    const socials = [
        {
          title: "Facebook",
          link: "#",
          icon: facebook,
        },
        {
          title: "WhatsApp",
          link: "#",
          icon: whatsapp,
        },
        {
          title: "Telegram",
          link: "#",
          icon: telegram,
        },
      ];
    return ( 
        <div>
          <p className="font-semibold mb-4">Share your video </p>
          <div className="flex gap-4 flex-wrap">
            {socials.map((item) => (
              <div key={item.title}>
                <Button
                  icon={item.icon}
                  title={item.title}
                  outline
                  onClick={() => console.log("share video!")}
                />
              </div>
            ))}
          </div>
        </div>
     );
}
 
export default Share;