'use client'
import Navbar from '@/components/navbar'
import { Box, Container, Flex, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

function TermsOfUse() {
    return (
        <Box bg="#000000" color="#ffffff">
            <Navbar />
            <Container maxW={'7xl'} py={{ base: 12, md: 24 }} minH={'100vh'}>
                <Box>
                    <Flex flexDirection={'column'} align="center" justify="center" w="100%" h="150px">
                        <Text fontSize={'xx-large'} fontWeight={500}> Terms and Conditions</Text>
                        <Text fontSize={'large'} fontWeight={500}>30th March 2023</Text>
                    </Flex>

                    <Text>The Monapp service, website and/or software application (collectively, the “Service”) enables you to pay for products and services offered by third parties (“Products”). The Service is operated by Creatorh Technologies Limited (“Monapp”), subject to these Terms of Service (“Terms”).</Text>

                    <Text my="40px" fontSize={'xx-large'} fontWeight={500}>Welcome to Monapp&#39;s Terms of service</Text>

                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>This is a contract.</Text>
                        <Text>These Terms constitute a contract between you and Monapp. If you do not accept these Terms, please do not use the Service. By using any part of the Service you accept these Terms. If you are under eighteen (18) years of age, you may not use the Service.</Text>
                    </Box>




                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>You must register an account with valid information.</Text>
                        <Text>To use the Service, you must: (a) provide a valid mobile phone number; (b) agree that an account associated with such number be created; (c) accept the current Terms; and (d) submit such other and additional information as Monapp may request. You agree to provide true, accurate and complete information about yourself as prompted by Monapp during the account registration process. You will be given the option of receiving a unique PIN for purposes of reusing your account. You are responsible for keeping your PIN secure.</Text>


                    </Box>

                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>Third party merchants offer the goods & services.</Text>
                        <Text>The Service provides an opportunity to discover offers from independent third party merchants (“Merchants”). These Merchants sell their respective Products subject to their own terms and conditions. To illustrate:</Text>
                        <UnorderedList>
                            <ListItem>Airtime: If you choose to purchase pre-paid airtime, you do so pursuant to the relevant terms and conditions of your mobile telecommunications provider.</ListItem>
                            <ListItem>Utilities: If you choose to purchase pre-paid electricity or water, you do so pursuant to the relevant terms and conditions of the utility provider.</ListItem>

                        </UnorderedList>
                        <Text>If you decide to purchase Products such as these from third party Merchants, you do so at your own risk and subject to the relevant Merchant’s terms and conditions. The Products are not investigated, monitored, or checked for accuracy, reliability, appropriateness or completeness by Monapp. By permitting you to discover Products via the Service, Monapp does not imply approval or endorsement of such Products. You agree that Monapp is not responsible or liable for the Products you purchase from Merchants.</Text>

                    </Box>

                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>Payments are processed by third parties. </Text>
                        <Text>In order to facilitate your purchases from Merchants, Monapp has integrated its Service with the billing solutions of certain mobile money providers and credit card issuing banks (“Payment Processors”). When you purchase a Product from a Merchant using your supported mobile money wallet or account or debit/credit card, payments will be processed by such Payment Processors. Payment Processors have their own terms and conditions governing your use of their payment servicess. You understand and agree that Monapp does not process payments and is not responsible or liable for any transactions in which you engage. By engaging in a purchase transaction using your mobile money account or debit/credit card, you authorize the Merchant (or Monapp on its behalf) to bill your account or card for the purchase amount.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>Your privacy is important to us.</Text>
                        <Text>Monapp takes the matters of protection and security of its users’ information very seriously. Monapp’s privacy policy governing the Service is attached to these Terms (“Privacy Policy”). The Privacy Policy is incorporated into these Terms by this reference. By using the Service, you agree to the use of your data in accordance with Monapp’s Privacy Policy. The Privacy Policy addresses only the information collected by Monapp in providing the Service to you. Merchants and Payment Processors have their own information gathering practices which apply when you choose to purchase their Products.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>Product inquiries should be submitted to the relevant Merchant.</Text>
                        <Text>If you have any questions, concerns or requests related to a Product you have purchased from a Merchant, please contact the Merchant directly or contact us at ng-support@Monapp-inc.com. Each Merchant maintains its own customer contact desk for handling such requests, however Monapp will do its best to assist you. If you wish to submit a complaint about the practices of a Merchant offering its Products via the Service, you may contact us by email at ng-support@Monapp-inc.com.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>You must not use the Service to violate any laws.</Text>
                        <Text>You must not use the Service to violate or infringe the rights of any other person, including the rights of other users, Monapp’s rights in the Service or Merchants’ rights in their Products. You must not breach any laws or regulations when using the Service or attempt to disrupt or interfere with the security or functionality of the Service. In the event that Monapp reasonably suspects that you are using the Services for illegal activities (particularly fraud, money laundering or other related illegalities), Monapp reserves the right to block your account immediately without liability. Such illegalities as mentioned above may be as a result of enacted laws, court judgments, rulings or pronouncements, or regulatory policies and guidelines to which Monapp is bound. If a breach is associated with your account/wallet, you agree that we have the right to apply restrictions to your account/wallet and report to the appropriate law enforcement agencies or the respective regulator, in line with extant laws.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>Monapp may contact you regarding your account or the Service.</Text>
                        <Text>You expressly agree that, as part of the Service, you may, from time to time, receive communications from Monapp via email, instant message, telephone, text message (SMS) or other means. You may stop receiving promotional messages by emailing your request to opt-out, along with your cell phone number, tong-support@Monapp-inc.com, or following the opt-out instructions in the message. Even if you choose to opt out of receiving promotional messages, you may not opt out of receiving service-related messages as these ensure that we are able to deliver accurate, relevant, sensitive and security-related services to you.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>Monapp may discontinue the Service.</Text>
                        <Text>Monapp may in furtherance of regulatory, time-sensitive and security-related purposes terminate your access to the Service or discontinue providing the Service or any part of the Service, with due notice to you [or without notice where the suspension or termination is expedient to forestall, curb or extinguish some ongoing fraud, industry-wide compromise or an ongoing financial crime-related investigation]. Rest assured that we will provide as much notice as the circumstance allows, and restore the Service at the earliest convenience. You agree that in the event of the foregoing, Monapp will not be responsible or liable to you or any third party.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>The Service is provided without any warranties or guarantees. </Text>
                        <Text>The Service is provided “as is“ without warranty of any kind. Monapp and its suppliers and affiliates disclaim all warranties with regard to the service, including all implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. If you are dissatisfied with any portion of the service, or with any of these terms, your sole and exclusive remedy is to discontinue using the service.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>Monapp is not liable for any damages you may incur as a result of using the Services. </Text>
                        <Text> In no event shall Monapp or its suppliers be liable for any direct, indirect, punitive, incidental, special, consequential damages, or any damages whatsoever arising out of, or in any way connected with the use or performance of the service, with the delay or inability to use the service, the provision of (or failure to provide services), or otherwise arising out of the use of the service, whether based on contract, tort, negligence, strict liability, or otherwise, even if Monapp or any of its suppliers have been advised of the possibility of such damages.</Text>
                    </Box>
                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>You agree to arbitrate any disputes.  </Text>
                        <Text> This Agreement is subject to, and shall be governed by, and construed in accordance with the laws of Nigeria, without reference to the principles of conflict of laws thereof. Any matters arising concerning the interpretation, validity or implementation of this Agreement not solved by mutual agreement between the Parties shall be submitted to arbitration in the English language before a sole arbitrator to take place in Lagos, Nigeria as the seat of the arbitration. The arbitration shall be conducted pursuant to the Rules of Arbitration of the Chartered Institute of Arbitrators of the United Kingdom. The arbitral decision shall be final and binding on the Parties and may be made an order of court. The Parties unconditionally consent and submit to the jurisdiction of the High Court of Lagos, Nigeria for such purpose. Nothing in this Agreement will be deemed as preventing Monapp from seeking injunctive relief (or any other provisional remedy) from any court having jurisdiction over the Parties and the subject matter of the dispute as is necessary to protect Monapp’s name, proprietary information, trade secrets, know-how, or any other intellectual property rights.</Text>
                    </Box>
                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>Monapp may modify these Terms. </Text>
                        <Text> These Terms and related policies (including but not limited to the Privacy Policy) may be modified by Monapp at any time in the future. Where this happens, we will communicate the changes to you. By continuing to use the Service, you agree to be bound by the latest version of these Terms. It is your responsibility to familiarize yourself with the communicated changes.</Text>
                    </Box>

                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>Alteration.  </Text>
                        <Text>  No alteration, variation or agreed cancellation of this agreement, and the Privacy Policy, shall be of any effect unless so directed by us.</Text>
                    </Box>
                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>Whole Agreement.  </Text>
                        <Text>This Agreement constitutes the whole agreement between the parties in regard to the subject matter hereof and no warranties or representations of any nature whatsoever other than set out in this agreement have been given by any of the parties.</Text>
                    </Box>
                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>Waiver/Relaxation.  </Text>
                        <Text>No relaxation or indulgence which Monapp may show to you shall in any way prejudice or be deemed to be a waiver of its rights hereunder.</Text>
                    </Box>
                    <Box my="20px">
                        <Text fontSize={'x-large'} fontWeight={500}>Survival. </Text>
                        <Text>Each and every provision of this Agreement (excluding only those provisions which are essential at law for a valid and binding Agreement to be constituted) shall be deemed to be separate and severable from the remaining provisions of this Agreement. If any of the provisions of this Agreement (excluding only those provisions which are essential at law for a valid and binding Agreement to be constituted) is found by any court of competent jurisdiction to be invalid and/or unenforceable then, notwithstanding such invalidity and/or unenforceability, the remaining provisions of this Agreement shall be (and remain) of full force and effect.</Text>
                    </Box>


                </Box>
            </Container>
        </Box>
    )
}

export default TermsOfUse