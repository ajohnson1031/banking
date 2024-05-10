import { FormControl, FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authFormSchema, cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Control, FieldPath } from "react-hook-form";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { z } from "zod";
import Img, { ImgVariant } from "../Img";
import { Button } from "../ui/button";

const formSchema = authFormSchema("sign-up");

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  type?: string;
}

const CustomInput: FC<CustomInputProps> = ({ control, name, label, placeholder, type = "text" }) => {
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>(type);

  const autoCompleteTypes: any = {
    password: "current-password",
    email: "email",
  };

  const handleEyeToggle = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setEyeOpen((prev) => !prev);
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={name}
                type={inputType}
                placeholder={placeholder}
                className={cn("input-class", { "pr-11": type === "password" })}
                {...field}
                value={field.value as string}
                autoComplete={autoCompleteTypes[name] || undefined}
              />
            </FormControl>
            {type === "password" && (
              <Button className={"-mt-10 ml-auto pr-3"} onClick={handleEyeToggle}>
                <Img type={ImgVariant.ICON} src={eyeOpen ? RiEyeLine : RiEyeCloseLine} color={!eyeOpen ? "#6B7280" : ""} />
              </Button>
            )}
            <FormMessage className={cn("form-message mt-2", { "mt-2": type === "password" })} />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
