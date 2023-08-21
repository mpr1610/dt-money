import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styled";
import logoImg from '../../assets/Ignite simbol.svg'
import * as Dialog  from "@radix-ui/react-dialog";
import { NewTransitionModal } from "../NewTransactionModal";

export function Header(){
    return(
    <HeaderContainer>
        <HeaderContent>
            <img src={logoImg} alt="" /> 

            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <NewTransactionButton> Nova Transanção</NewTransactionButton>
                </Dialog.Trigger>

                <NewTransitionModal/>
            </Dialog.Root>
                
            
            
        </HeaderContent>
    </HeaderContainer>
    )
}