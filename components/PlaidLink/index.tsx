import Img from "@/components/Img";
import { Button } from "@/components/ui/button";
import { createLinkToken, exchangePublicToken } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from "react-plaid-link";

const PlaidLink = ({ user, variant = "null" }: PlaidLinkProps) => {
  const router = useRouter();

  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({ publicToken: public_token, user });
      router.push("/");
    },
    [user]
  );

  const config: PlaidLinkOptions = { token, onSuccess };

  const { open, ready } = usePlaidLink(config);

  const handleClick = () => open();

  const buttons = {
    primary: (
      <Button className="plaidlink-primary" onClick={handleClick} disabled={!ready}>
        Connect Bank
      </Button>
    ),
    ghost: (
      <Button className="plaidlink-ghost" onClick={handleClick}>
        <Img src="/icons/connect-bank.svg" alt="connect bank" size={20} />
        <p className="text-[16px] font-semibold text-black-2 hidden xl:block">Connect Bank</p>
      </Button>
    ),
    null: (
      <Button className="plaidlink-default" onClick={handleClick}>
        <Img src="/icons/connect-bank.svg" alt="connect bank" size={20} />
        <p className="text-[16px] font-semibold text-black-2">Connect Bank</p>
      </Button>
    ),
  };

  return <>{buttons[variant]}</>;
};

export default PlaidLink;
