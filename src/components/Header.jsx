import logo from "../assets/header/logoLsk.svg"
import lineTopHorizontal from "../assets/header/lineTopHorizontal.svg"
import lineTopVertical from "../assets/header/lineTopVertical.svg"
import lineBottomHorizontal from "../assets/header/lineBottomHorizontal.svg"
import lineBottomVertical from "../assets/header/lineBottomVertical.svg"
import phone from "../assets/header/phone.svg"
import mail from "../assets/header/mail.svg"

const Header = () => {
    return (
        <div id="header" className="">
            <div className="flex flex-wrap justify-between">
                <div className="flex ml-16 my-3 align-middle">
                    <img className="" src={logo} alt="logo"/>
                    <div className="text-4xl text-[#0056FE]">
                        <p>Лайт</p>
                        <p> Стоун</p>
                        <p>Компани</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center text-6xl text-[#555557]">
                    <p className="">Щебень из песчаника</p>
                    <p className="indent-80">от производителя</p>
                </div>
                <div className="flex flex-initial min-w-80 mr-32 my-4 relative">
                    <img className="absolute bottom-0 left-0" src={lineBottomHorizontal} alt=""/>
                    <img className="absolute bottom-0 left-4" src={lineBottomVertical} alt=""/>
                    <img className="absolute top-2 right-0" src={lineTopHorizontal} alt=""/>
                    <img className="absolute top-0 right-4" src={lineTopVertical} alt=""/>
                    <img className="absolute top-4 left-6" src={phone} alt=""/>
                    <p className="absolute top-4 left-20 text-2xl text-[#565455]">+7(959)222-22-22</p>
                    <img className="absolute bottom-4 left-6" src={mail} alt=""/>
                    <p className="absolute bottom-6 left-24 text-2xl text-[#565455]">ooolsklpr<span className="text-[#005dff]">@</span>mail.ru</p>
                </div>
            </div>
        </div>
    )
}
export default Header
