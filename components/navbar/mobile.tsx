import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Logo from '../logo'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AlignJustify } from 'lucide-react'
import { externalNavLinks } from '@/constants/externalLinks'

const Mobile = () => {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="lg:hidden"
      >
        <Button
          size="icon"
          className="bg-transparent hover:bg-transparent"
        >
          <AlignJustify
            size={26}
            aria-label="Hamburger menu icon"
          />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetClose asChild>
            <Logo size="lg" />
          </SheetClose>
        </SheetHeader>
        <div className="mt-10 flex flex-col space-y-3 px-4">
          <SheetClose
            asChild
            className="border-b border-primary-50 pb-2"
          >
            <Link
              href="/"
              className="text-header-6 text-primary-700"
            >
              Anasayfa
            </Link>
          </SheetClose>
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            <AccordionItem value="hakkimizda">
              <AccordionTrigger className="text-primary-700 data-[state=open]:border-b data-[state=open]:border-primary-50 data-[state=open]:pb-2">
                Hakkımızda
              </AccordionTrigger>
              <AccordionContent>
                <SheetClose
                  asChild
                  className="border-b border-primary-50 py-2 pl-4"
                >
                  <Link
                    href="/tarihce"
                    className="text-paragraph text-primary-700"
                  >
                    Tarihçe
                  </Link>
                </SheetClose>
                <SheetClose
                  asChild
                  className="pl-4"
                >
                  <Link
                    href="/biyografi"
                    className="text-paragraph text-primary-700"
                  >
                    Biyografi
                  </Link>
                </SheetClose>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <SheetClose
            asChild
            className="border-b border-primary-50 pb-2"
          >
            <Link
              href="/kitap-listesi?page=1"
              className="text-header-6 text-primary-700"
            >
              Kitap Listesi
            </Link>
          </SheetClose>
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            <AccordionItem value="hakkimizda">
              <AccordionTrigger className="text-primary-700 data-[state=open]:border-b data-[state=open]:border-primary-50 data-[state=open]:pb-2">
                Diğer Sitelerimiz
              </AccordionTrigger>
              <AccordionContent>
                {externalNavLinks.map((item, index) => (
                  <SheetClose
                    asChild
                    key={item.title}
                    className={`pl-4 first-of-type:pt-2 ${
                      index !== externalNavLinks.length - 1
                        ? 'border-b border-primary-50 pb-2'
                        : ''
                    }`}
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      className="text-paragraph text-primary-700"
                    >
                      {item.title}
                    </a>
                  </SheetClose>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <SheetClose
            asChild
            className="border-b border-primary-50 pb-2"
          >
            <Link
              href="/iletisim"
              className="text-header-6 text-primary-700"
            >
              İletişim
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Mobile
