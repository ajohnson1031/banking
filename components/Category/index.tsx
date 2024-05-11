import Img from "@/components/Img";
import { Progress } from "@/components/ui/progress";
import { topCategoryStyles } from "@/constants";
import { cn } from "@/lib/utils";

const Category = ({ category }: CategoryProps) => {
  console.log(category);
  const {
    bg,
    circleBg,
    text: { main, count },
    icon: { sprite, size },
    progress: { bg: progressBg, indicator },
  } = topCategoryStyles[category.name as keyof typeof topCategoryStyles] || topCategoryStyles.default;

  return (
    <div className={`p-4 ${bg} rounded-md flex gap-3`}>
      <div className={`w-10 h-10 ${circleBg} rounded-full flex items-center justify-center`}>
        <Img src={sprite} alt={category.name} size={size} />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex w-full justify-between">
          <p className={`${main} text-14 font-medium`}>{category.name}</p>
          <p className={`${count} text-14`}>${category.count}</p>
        </div>
        <Progress value={(category.count / category.totalCount) * 100} className={`h-2 w-full ${progressBg}`} indicatorClassName={cn("h-2 w-full rounded-full", indicator)} />
      </div>
    </div>
  );
};

export default Category;
