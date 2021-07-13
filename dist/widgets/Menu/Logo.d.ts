import React from "react";
interface Props {
    isPushed: boolean;
    isDark?: boolean | undefined;
    togglePush: () => void;
    href: string;
}
declare const Logo: React.FC<Props>;
export default Logo;
