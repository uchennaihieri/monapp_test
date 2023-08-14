'use client'
import Navbar from '@/components/navbar'
import { Box, Container, Flex, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

function privacyPolicy() {
    return (
        <Box bg="#000000" color="#ffffff">
            <Navbar />
            <Container maxW={'7xl'} py={{ base: 12, md: 24 }} minH={'100vh'}>
                <Box>
                    <Flex flexDirection={'column'} align="center" justify="center" w="100%" h="150px">
                        <Text fontSize={'xx-large'} fontWeight={500}> Privacy Policy</Text>
                        <Text fontSize={'large'} fontWeight={500}>30th March 2023</Text>
                    </Flex>

                    <Text>At monapp, the privacy of the Personal Data of our Data Subjects is of utmost importance to us. In line with our resolution, we have developed this Privacy Policy to explain your privacy rights regarding how we collect, use, share and protect your Personal Data when you visit our website, premises or use our digital platforms.</Text>

                    <Text>This Privacy Policy between monapp and you constitutes our commitment to your continued privacy on all our platforms. It is designed to provide information regarding our privacy practices and help you understand how we handle your data.</Text>

                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>1. Consent</Text>
                        <Text>When you access our platforms and give your consent upon such access, you accept this privacy policy; in particular, as you use the services offered on our website and digital platform or visit any of our offices and submit your data for official or non-official purposes.</Text>
                    </Box>




                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>2. What Personal Data do we collect?</Text>
                        <Text>We collect Personal Data about you when you use the services offered on our website and digital platform, including the following:</Text>
                        <OrderedList>
                            <ListItem my="10px">Sign-up information: When you register to use the services offered on our digital platform, we will collect the Personal Data necessary to on-board you; including your name, email address, mobile number and debit card details. We may require you to provide additional, necessary personal details as you use our services.</ListItem>


                            <ListItem my="10px">Transaction information: When you use our digital platform to send and receive money, make purchases from merchants, pay bills, deposit & withdraw cash, we collect information about the transaction, as well as other associated information; such as: the amount sent or received, amount paid for products or services, merchant information – including information about your device and geolocation.</ListItem>


                            <ListItem my="10px">Participant Personal Data: When you use our services, we collect Personal Data about the other participants associated with the transaction, including your phone contacts so you can easily manage account transfers and to enable instant messaging (IM). We collect Personal Data such as name and financial account information about the participant who is receiving money from (or sending money to) you.</ListItem>

                            <ListItem my="10px">Information from other sources: We may collect information from other sources, such as our social media platforms when you reach out to us to lodge a complaint about some our services. However, we will only ask for information relevant to the help required of us to you.</ListItem>

                            <ListItem my="10px">Other information we collect related to your use of our website or Services: We may collect additional information from or about you when you communicate with us, contact our customer support teams or respond to a survey.</ListItem>

                            <ListItem my="10px">When you apply for a job with us: We may request Personal Data about your education, employment and state of health. As part of your application, you will be asked to provide your express consent to our use of this information to assess your application and any monitoring activities which may be required of us under applicable laws as an employer.</ListItem>

                        </OrderedList>

                        <Text my="5x">We may also carry out screening checks (including reference, background and criminal record checks).</Text>
                        <Text my="5px">We may exchange your Personal Data with academic institutions, recruiters, health maintenance organisations, law enforcement agencies, referees and your previous employers.</Text>
                        <Text my="5px">Without your Personal Data, we may not be able to process your application for positions with us.</Text>

                        <Text>We do not collect the information of minors.</Text>
                        <Text>If you are under the age of 18, you are not eligible to use the service offered on our digital platform.</Text>


                    </Box>

                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>3. How Do We Retain Personal Data?</Text>
                        <Text>We retain Personal Data in an identifiable format only for as long as required for our business purposes, with specific reference to the service rendered to you, and to fulfil our legal or regulatory obligations. We may retain Personal Data for longer periods where legitimate business interests require it, and for purposes of judicial, regulatory or fraud monitoring or prevention. We will continue to use and disclose such Personal Data in accordance with this Privacy Policy.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>4. What do we do with your Personal Data?</Text>
                        <Text>We collect your personal data to provide you an efficient and secure customer experience. We process your information to</Text>
                        <OrderedList >
                            <ListItem my="10px">Provide services, including to:
                                <UnorderedList>
                                    <ListItem>Initiate a payment, send or request money, or pay a bill</ListItem>
                                    <ListItem>Authenticate your access to an account</ListItem>
                                    <ListItem>Communicate with you about your account</ListItem>

                                </UnorderedList>

                            </ListItem>
                            <ListItem my="10px">Manage risk, fraud and abuse of our services and prevent you from fraud (by developing and adopting measures of verifying your identity)..</ListItem >
                            <ListItem my="10px">Comply with our legal and regulatory obligations and to enforce the terms of our sites and services, including to comply with all applicable laws and regulations.</ListItem>
                            <ListItem my="10px">Trail information breach and remediate such identified breaches.</ListItem>
                            <ListItem my="10px">Resolve disputes and troubleshoot problems.</ListItem>
                            <ListItem my="10px">With your consent:
                                <UnorderedList>
                                    <ListItem>Market monapp products and services to you.</ListItem>
                                    <ListItem>Use cookies to provide a targeted display, feature, service or offer to you.</ListItem>

                                </UnorderedList>

                            </ListItem>
                        </OrderedList>
                        <Text my="5px">We will not send unsolicited marketing communications to you by SMS or email if you have not opted in to receive them.</Text>
                        <Text my="5px">Additionally, you can withdraw your consent at any time and free of charge.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>5. Sharing your Personal Data</Text>
                        <Text>We may share your Personal Data or other information about you with others for the following reasons:</Text>
                        <UnorderedList>
                            <ListItem>With other companies that provide services to us: We may share Personal Data with third-party service providers that perform services and functions at our direction and on our behalf. These third-party service providers may, for example, provide you with services, verify your identity, assist in processing transactions, send you advertisements for our products and services, or provide customer support. Rest assured that we make double sure that these companies have compliant, legal measures in place to ensure the confidentiality of your Personal Data.</ListItem>
                            <ListItem>With other financial institutions: We may share Personal Data with other financial institutions that we have partnered with to only offer monapp-related services, unless your consent extends to other uses. We may also share Personal Data to process transactions and keep your financial information up to date.</ListItem>
                            <ListItem>With the other parties to transactions when you use the services, such as other users and their service providers. This includes other users you are sending or receiving funds from and their service providers. The information might include:
                                <UnorderedList>
                                    <ListItem>
                                        Personal Data and account information necessary to facilitate the transaction; and
                                    </ListItem>
                                    <ListItem>
                                        Personal Data to help other participant(s) resolve disputes and detect and prevent fraud.
                                    </ListItem>
                                </UnorderedList>

                            </ListItem>
                            <ListItem>Where permitted or required by law. We may share information about you with other parties for monapp’s business purposes or as permitted or required by law, including:
                                <OrderedList>
                                    <ListItem>
                                        If we need to do so to comply with a court proceeding, other legal process or an applicable regulation;
                                    </ListItem>
                                    <ListItem>
                                        To law enforcement authorities or other government officials, or other third parties pursuant to a court order or other legal process or requirement applicable to monapp or an affiliated entity;
                                    </ListItem>

                                    <ListItem>
                                        Where we reasonably believe that the disclosure is necessary or appropriate to prevent an imminent physical harm or financial loss, or in connection with an investigation of suspected (or actual) illegal activity;
                                    </ListItem>

                                    <ListItem>
                                        With credit agencies and data processors for credit reference checks and anti-fraud and compliance purposes – all in accordance to applicable data privacy regulations and laws;
                                    </ListItem>

                                    <ListItem>
                                        To investigate violations of or enforce a user agreement or other legal terms applicable to any service;
                                    </ListItem>

                                    <ListItem>
                                        To protect our property, services and legal rights;
                                    </ListItem>

                                    <ListItem>
                                        As reasonably and legally permitted, to facilitate a purchase or sale of all or part of monapp’s business, or in the instance of some merger and acquisition;
                                    </ListItem>

                                    <ListItem>
                                        To support our audit, compliance, and corporate governance functions.
                                    </ListItem>
                                </OrderedList>

                            </ListItem>

                            <ListItem>With your consent: We also will share your Personal Data and other information with your consent or direction.</ListItem>
                        </UnorderedList>

                    </Box>

                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>6. How We Use Cookies</Text>
                        <Text>Cookies are small files placed on your device’s browser that enable the website to identify your device as you view different pages. Like most interactive websites, our website uses cookies to enable us track of your activity for the duration of a session. Our website uses only encrypted session cookies which are erased either after a predefined timeout period or once the user logs out of the platform and closes the browser. Session cookies do not collect information from your device. They will typically store data in the form of a session identification that does not personally identify you. Certain aspects of our website are only available through the use of cookies, so your use of our website may be limited or not possible if you choose to disable or decline cookies.</Text>
                    </Box>


                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>7. What Are Your Rights?</Text>
                        <OrderedList>
                            <ListItem my="10px">Requests to Access, Rectify or Erase.
                                Access Request
                                As permitted under law and applicable data privacy regulations, you have the right to ask us whether we hold any Personal Data relating to you and, if we do, to be provided with a copy of that Personal Data in electronic form, unless you want to receive it in another way (for example, a paper copy). In addition, you can ask us for information on how we use your Personal Data, who we share it with, how long we keep it, where it is stored, and other information to help you understand how we use it.
                                <br />
                                Rectification Request
                                You have the right to ask us to correct your Personal Data (including by means of providing a supplementary statement) if it is inaccurate, or update outdated or incomplete Personal Data without undue delay. Where we cannot correct the Personal Data, we include a note on our files regarding your request to correct your Personal Data.
                                <br />
                                Erasure Request
                                You have the right to ask us to erase your Personal Data if:

                                Your Personal Data are no longer necessary for the purpose(s) they were collected for.
                                Your Personal Data have been unlawfully processed.
                                Your Personal Data must be erased to comply with a regulation.
                                You withdraw your consent for the processing of the Personal Data (and if this is the only basis on which we are processing your Personal Data).
                                You object to the possession, provided there are no overriding legitimate grounds for continued processing, or
                                You object to processing for direct marketing purposes.
                                If an erasure request is received, we will also take reasonable steps to inform other data controllers processing the data so they can seek to erase links to or copies of your Personal Data. We may refuse to act on your request to erase your Personal Data if the processing of your Personal Data is necessary:
                                To exercise our right of freedom of expression and information.
                                To comply with the NDPR and relevant Nigerian laws.
                                For the performance of a task carried out in the public interest or to exercise some official authority vested in us.
                                To establish, exercise or defend legal claims.

                                In these cases, we can restrict the processing instead of erasing your Personal Data if requested to do so by you.</ListItem>
                            <ListItem my="10px">Requests to Object: You have the right to object at any time to the processing of your Personal Data if we process it based on our legitimate interests. This includes any so-called “profiling”. Our privacy notice informs you when we rely on legitimate interests to process your Personal Data. In these cases, we will stop processing your Personal Data unless we can demonstrate compelling legitimate reasons for continuing the processing. We may reject your request if the processing of your Personal Data is needed to establish, exercise or defend legal claims. You have the right to object at any time if we process your Personal Data for direct marketing purposes. You may also object at any time to profiling supporting our direct marketing. In such cases, we will stop processing your Personal Data when we receive your objection.</ListItem>
                            <ListItem my="10px">Requests to Restrict: You have the right to ask us to restrict the processing of your Personal Data if:
                                You contest the accuracy of your Personal Data and we are in the process of verifying the Personal Data we hold.
                                The processing is unlawful and you do not want us to erase your Personal Data.
                                We no longer need your Personal Data for the original purpose(s) of processing, but you need them to establish, exercise or defend legal claims and you do not want us to delete the Personal Data as a result, or
                                You have objected to processing carried out because of our legitimate interests while we verify if our legitimate grounds override yours.
                                If processing is restricted, we may process your Personal Data (excepting for storage purposes), only:
                                If you have given us your consent.
                                For establishing, exercising or defending legal claims.
                                For protecting the rights of another natural or legal person, or
                                For reasons of important public interest as defined under the NDPR and relevant Nigerian laws.

                                Once processing is restricted following your request, we will inform you before we lift the restriction.</ListItem>
                            <ListItem my="10px">Requests for Portability: If our processing is performed by computer and is necessary to fulfil a contract with you, or is based on your consent, you have the right to:
                                Receive any Personal Data you have provided to us in a structured, commonly used and machine-readable electronic format.
                                Send your Personal Data to another organization or have us do so for you if it is technically feasible for us to do so.
                                If your request relates to a set of Personal Data that also concerns other individuals, we may restrict the transfer to only the portion relevant to you, unless you establish that you have also gotten their consent.

                                Even if you request the portability of your Personal Data, you retain your right to also request their erasure.</ListItem>
                            <ListItem my="10px">Requests to Object to Automated Decisions: Generally, you have the right to object to any legal decision concerning you or which otherwise significantly affects you if this is based solely on the automated processing of your Personal Data. This includes automated decisions based on profiling. In such instance, you may undertake a legal process to prevent or advance your rights.
                                Otherwise, we may refuse your request regarding such automated decisions where:
                                Necessary to enter into a contract with you, or for the performance of your contract with us.
                                Permitted by regulations, or
                                Based on your explicit consent.</ListItem>
                            <Text my="5px">Our actions on the automated processing involving your sensitive Personal Data (where you have given your explicit consent or the processing is necessary for reasons of substantial public interest), are in complete compliance with the NDPR and relevant laws.</Text>
                        </OrderedList>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>8. How Do We Protect Your Personal Data?</Text>
                        <Text>We maintain technical, physical, and administrative security measures designed to provide reasonable protection for your Personal Data against loss, misuse, unauthorised access, disclosure, and alteration. The security measures include firewalls, data encryption, physical access controls to our premises, CCTV cameras for public safety and quality control, as well as information access authorisation controls. While we are dedicated to securing our systems and services, please note that you are responsible for securing and maintaining the privacy of your password(s) and account/profile registration information and verifying that the Personal Data we maintain of you is accurate and current.

                            We will inform you of any breaches which may affect your Personal Data.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>9. Remedies for Violation and Timeframe for Remedy</Text>
                        <Text>In the event of violation of this policy, our Data Protection Officer shall within 7 days redress the violation. Where the violation pertains to the disclosure of your Personal Data without your consent, such information shall be retracted immediately, and confirmation of the retraction sent to the you within 48 hours of the redress.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>10. Governing Law</Text>
                        <Text>This Privacy Policy is made according to the Nigeria Data Protection Regulation (2019) or any other relevant Nigerian laws, regulations or international conventions applicable to Nigeria.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>11. Changes to our Privacy Policy</Text>
                        <Text>This privacy policy is reviewed periodically and when there is any substantial change to business or regulatory requirements. At the minimum, we shall review this annually and communicate via our communication channels such as Website, Social Media Accounts etc.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>12. Contact Us</Text>
                        <Text>If you have any general questions or concerns about this Privacy Policy or the way in which we handle your Personal Data, kindly contact us via the details below:</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'xx-large'} fontWeight={500}>13. Declaration</Text>
                        <Text >I have read all the terms and conditions within this Notice and hereby agree/ disagree to use of my personal data for above mentioned purposes.</Text>
                    </Box>


                    <Box>
                        <Text>CREATORH TECHNOLOGIES LIMITED</Text>
                        <Text>222 Obinaocha Avenue, Orji Owerri, Imo State.</Text>
                        <Text>Email: privacy@monapp.ng</Text>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default privacyPolicy