import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


export const Header = () => {
    return (
        <header className="bg-slate-950 text-white p-3 mx-auto">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-lg font-bold">
                    <a href="/">Stakk</a>
                </div>
                <div>
                    <WalletMultiButton/>
                </div>
            </div>
        </header>
    )
}