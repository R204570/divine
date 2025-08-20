import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ProductCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[]
}

export function ProductCarousel({ images, className, ...props }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const canScrollPrev = emblaApi?.canScrollPrev() ?? false
  const canScrollNext = emblaApi?.canScrollNext() ?? false

  return (
    <div className={cn("relative", className)} {...props}>
      <div ref={emblaRef} className="overflow-hidden rounded-lg">
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="aspect-[16/9]">
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm",
          !canScrollPrev && "hidden"
        )}
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm",
          !canScrollNext && "hidden"
        )}
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
