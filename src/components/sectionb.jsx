import React from 'react'
import van from "../icon/free-delivery.png"
import secured from "../icon/credit-card(1).png"
import support from "../icon/24-hours-support.png"
import exchange from "../icon/exchange.png"
import { motion, AnimatePresence } from "framer-motion";

function Sectionb() {
    return ( 
        <>
         
        <section className="support-section">
             <h3> We Serve You The Best Product At Best Prices </h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestias officia commodi. Nemo maiores culpa saepe aut, debitis sunt aspernatur vel error repellendus suscipit, necessitatibus expedita? Repellendus mollitia a totam.</p>

             <div className="support-flex-container" >
             <AnimatePresence>
            <motion.div
                key="div"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }} className="boxa" >
                    <img src={van} alt="" />
                    <p>Free delivery</p>
                    <p>lorem ipsum dolor sit amet,</p>
                    </motion.div>
        </AnimatePresence>

               <AnimatePresence>
            <motion.div
                key="div"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}  className="boxa">
                    <img src={secured} alt="" />
                    <p>Secured Payments</p>
                    <p>lorem ipsum dolor sit amet,</p>
                    </motion.div>
        </AnimatePresence>

        <AnimatePresence>
            <motion.div
                key="div"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }} className="boxa">
                    <img src={support} alt="" />
                    <p>24/7 Online Support</p>
                    <p>lorem ipsum dolor sit amet,</p>
                    </motion.div>
        </AnimatePresence>

        <AnimatePresence>
            <motion.div
                key="div"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }} className="boxa">
                    <img src={exchange} alt="" />
                    <p>exchange</p>
                    <p>lorem ipsum dolor sit amet,</p>
                    </motion.div>
        </AnimatePresence>

             </div>
        </section>

        <AnimatePresence>
            <motion.section
                key="section"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }} className="visit-us">
             <p>Visit Our Support Center</p>
             
             </motion.section>
        </AnimatePresence>
        </>
     );
}

export default Sectionb;