import { Text, Container } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import React from 'react'

import AppLayout from '../../components/layouts/AppLayout'
import PageHeader from '../../components/shared/PageHeader'

export default function HostingPage() {
  return (
    <>
      <NextSeo title="Hosting" />
      <AppLayout>
        <PageHeader
          title="Hosting"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          breadcrumbs={[]}
        />
        <Container maxW="container.lg" centerContent p={8}>
          <Text my={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh
            cras. Nisi porta lorem mollis aliquam ut porttitor. Magna fermentum iaculis eu non diam
            phasellus vestibulum. Eu sem integer vitae justo eget magna fermentum. Enim sed faucibus
            turpis in eu mi bibendum neque. Amet nisl purus in mollis nunc sed. Amet nisl suscipit
            adipiscing bibendum est ultricies integer. Quis viverra nibh cras pulvinar mattis nunc
            sed blandit. Porttitor eget dolor morbi non arcu risus quis varius quam. Fermentum
            posuere urna nec tincidunt praesent. Turpis egestas sed tempus urna et pharetra pharetra
            massa. Morbi tincidunt ornare massa eget. Turpis nunc eget lorem dolor sed viverra ipsum
            nunc.
          </Text>
          <Text>
            Id consectetur purus ut faucibus pulvinar. Cursus in hac habitasse platea. Sed
            adipiscing diam donec adipiscing tristique risus. Eget magna fermentum iaculis eu non
            diam. Suspendisse faucibus interdum posuere lorem ipsum dolor. Sapien nec sagittis
            aliquam malesuada. In aliquam sem fringilla ut morbi tincidunt augue interdum velit.
            Metus aliquam eleifend mi in. Sed elementum tempus egestas sed. Mi sit amet mauris
            commodo quis imperdiet massa. Sit amet volutpat consequat mauris. Lectus mauris ultrices
            eros in cursus turpis massa tincidunt. Ut sem viverra aliquet eget sit amet tellus cras
            adipiscing. Malesuada fames ac turpis egestas. Porta non pulvinar neque laoreet
            suspendisse interdum consectetur. Viverra vitae congue eu consequat ac felis donec et
            odio. Erat nam at lectus urna duis convallis convallis. Imperdiet massa tincidunt nunc
            pulvinar sapien et.
          </Text>
        </Container>
      </AppLayout>
    </>
  )
}
