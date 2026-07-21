import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Versión con brillo (Shimmer effect)
  "relative overflow-hidden after:absolute after:inset-0 after:top-[-50%] after:left-[-150%] after:w-[40%] after:h-[200%] after:bg-[linear-gradient(to_right,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_100%)] after:rotate-[30deg] after:transition-all after:duration-700 after:ease-[cubic-bezier(0.23,1,0.32,1)] hover:after:left-[150%] after:pointer-events-none inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [&_svg:last-child]:transition-transform [&_svg:last-child]:duration-300 hover:[&_svg:last-child]:translate-x-1",
  // Versión original (sin brillo)
  // "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [&_svg:last-child]:transition-transform [&_svg:last-child]:duration-300 hover:[&_svg:last-child]:translate-x-1",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        // Variante Shiny actualizada para coincidir con la imagen
        shiny:
          'rounded-full bg-[linear-gradient(180deg,#006E6B_0%,#00A19B_50%,#006E6B_100%)] text-white font-bold shadow-[inset_0_0_0_1px_#66E6E1,0_0_0_2px_#222222,0_0_0_4px_#00A19B,0_15px_20px_-5px_rgba(0,0,0,0.6)] border-none active:scale-95 transition-all duration-500',
        // shiny: 'rounded-full bg-[linear-gradient(180deg,#006E6B_0%,#00A19B_50%,#006E6B_100%)] text-white font-bold shadow-[inset_0_0_0_1px_#66E6E1,0_0_0_2px_#222222,0_0_0_4px_#00A19B,0_15px_20px_-5px_rgba(0,0,0,0.6)] border-none hover:brightness-110 active:scale-95 transition-all duration-500',
                    // 'rounded-full bg-[linear-gradient(180deg,#006E6B_0%,#00A19B_50%,#006E6B_100%)] text-white font-bold shadow-[inset_0_0_0_1px_#66E6E1,0_0_0_2px_#222222,0_0_0_4px_#006E6B,0_15px_20px_-5px_rgba(0,0,0,0.6)] border-none hover:brightness-110 active:scale-95 transition-all duration-500',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-full px-6 has-[>svg]:px-4',
        xl: 'h-12 rounded-full px-8 has-[>svg]:px-6',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }