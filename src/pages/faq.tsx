import { memo, useContext } from "react";
import Header from "@/components/Header";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MenuContext } from "@/hook/menuContext";

function Faq() {
  const { isDark } = useContext(MenuContext);
  return (
    <>
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <div className="h-[calc(100vh-16.5rem)] overflow-y-auto">
        <Accordion defaultExpanded className={`${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <AccordionSummary expandIcon={<ExpandMoreIcon className={`${isDark ? "text-gray-200" : "text-gray-800"}`} />}>
            <p className={`${isDark ? "text-teal-400" : "text-teal-700"}`}>An important question</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={`${isDark ? "text-gray-200" : "text-gray-800"}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga a dolorem possimus corporis magnam, velit
              atque eligendi voluptates, omnis ratione nihil reiciendis beatae blanditiis, expedita in at suscipit autem
              fugiat.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded className={`${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <AccordionSummary expandIcon={<ExpandMoreIcon className={`${isDark ? "text-gray-200" : "text-gray-800"}`} />}>
            <p className={`${isDark ? "text-teal-400" : "text-teal-700"}`}>Another important question</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={`${isDark ? "text-gray-200" : "text-gray-800"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam veritatis quasi tempora! Maiores
              temporibus enim non vero quidem iusto a, perspiciatis dolores cupiditate veritatis asperiores, quasi
              consequatur pariatur sint.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded className={`${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <AccordionSummary expandIcon={<ExpandMoreIcon className={`${isDark ? "text-gray-200" : "text-gray-800"}`} />}>
            <p className={`${isDark ? "text-teal-400" : "text-teal-700"}`}>Your favorite question</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={`${isDark ? "text-gray-200" : "text-gray-800"}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum suscipit dolorem doloribus optio, iusto
              esse cumque, animi, quos obcaecati iste minus commodi odio veritatis nulla harum sit in deserunt hic?
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded className={`${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <AccordionSummary expandIcon={<ExpandMoreIcon className={`${isDark ? "text-gray-200" : "text-gray-800"}`} />}>
            <p className={`${isDark ? "text-teal-400" : "text-teal-700"}`}>Some random question</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={`${isDark ? "text-gray-200" : "text-gray-800"}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus explicabo
              provident in, aspernatur nam nisi hic odio fuga illo molestias ipsa molestiae vitae, ex debitis qui
              ducimus numquam possimus!
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded className={`${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <AccordionSummary expandIcon={<ExpandMoreIcon className={`${isDark ? "text-gray-200" : "text-gray-800"}`} />}>
            <p className={`${isDark ? "text-teal-400" : "text-teal-700"}`}>The final question</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={`${isDark ? "text-gray-200" : "text-gray-800"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem sed fugiat cumque sit quidem similique
              nam incidunt quibusdam quos velit facere, exercitationem nesciunt debitis ea dignissimos illo quasi
              numquam est.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default memo(Faq);
