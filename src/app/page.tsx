'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Users, 
  Award, 
  Shirt, 
  Gift, 
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Heart,
  Target,
  Zap
} from 'lucide-react'

export default function Home() {
  const [activeProduct, setActiveProduct] = useState('uniformes')

  const handleWhatsAppContact = (product?: string) => {
    const message = product 
      ? `Olá! Tenho interesse em ${product}. Gostaria de mais informações.`
      : 'Olá! Gostaria de conhecer mais sobre os produtos da empresa.'
    
    const whatsappUrl = `https://wa.me/+5524992729808?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const uniformes = [
    {
      name: 'Uniformes Corporativos',
      description: 'Jaquetas e corta ventos personalizados com a identidade da sua empresa',
      image: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ec26724a-5932-48ee-9544-71dba3eee709.jpg',
      features: ['Bordado personalizado', 'Tecidos de qualidade', 'Diversos modelos']
    },
    {
      name: 'Uniformes Industriais',
      description: 'EPIs e uniformes para segurança do trabalho com personalização',
      image: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/0ff728b2-5a2a-4354-935a-7348651f208d.jpg',
      features: ['Certificação', 'Alta durabilidade', 'Normas de segurança']
    },
    {
      name: 'Uniformes casuais e esportivos',
      description: 'Polos, camisas e agasalhos para eventos corporativos',
      image: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/af6bad3f-a69b-487d-896b-cf99f2761deb.jpg',
      features: ['Tecido dry-fit', 'Algodão 30.1 penteado', 'Design exclusivo']
    }
  ]

  const brindes = [
    {
      name: 'Copos e Garrafas Personalizados',
      description: 'Copos e garrafas com sua marca',
      image: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/166619f3-b7ba-4f45-a3a6-d8774115969b.jpg',
      features: ['Impressão de qualidade', 'Diversos materiais', 'Embalagem especial']
    },
    {
      name: 'Brindes Corporativos',
      description: 'Fones de ouvido, caixinhas de som, entre outros acessórios personalizados',
      image: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/89c25c67-fb71-431b-a610-fadf7fb35eb3.jpg',
      features: ['Variedade de produtos', 'Preços competitivos', 'Entrega rápida']
    },
    {
      name: 'Mochilas e Ecobagas',
      description: 'Sacolas sustentáveis personalizadas para sua marca',
      image: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/4105d287-fbcc-4b33-a217-1c8fbe2ea549.jpg',
      features: ['Material ecológico', 'Impressão durável', 'Diversos tamanhos']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/8846cd06-7677-4d5d-ae97-6b6041c7589a.png" 
              alt="BJM Logo" 
              className="h-12 w-auto"
            />
            <Button 
              onClick={() => window.open('https://wa.me/+5524992729808', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Uniformes e Brindes
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700"> Personalizados</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Há mais de 15 anos criando identidade visual para empresas através de uniformes profissionais 
              e brindes personalizados de alta qualidade. Sua marca merece o melhor!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.open('https://wa.me/+5524992729808', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                Ver Produtos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">800+</div>
              <div className="text-gray-600">Empresas Atendidas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">48k+</div>
              <div className="text-gray-600">Uniformes Produzidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Produtos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma linha completa de uniformes e brindes personalizados para atender todas as necessidades da sua empresa
            </p>
          </div>

          {/* Product Categories */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <Button
                variant={activeProduct === 'uniformes' ? 'default' : 'ghost'}
                onClick={() => setActiveProduct('uniformes')}
                className={`rounded-full px-6 py-2 ${
                  activeProduct === 'uniformes' 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Shirt className="w-4 h-4 mr-2" />
                Uniformes
              </Button>
              <Button
                variant={activeProduct === 'brindes' ? 'default' : 'ghost'}
                onClick={() => setActiveProduct('brindes')}
                className={`rounded-full px-6 py-2 ${
                  activeProduct === 'brindes' 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }
                `}
              >
                <Gift className="w-4 h-4 mr-2" />
                Brindes
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {(activeProduct === 'uniformes' ? uniformes : brindes).map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">Personalizado</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a 
                    href="https://wa.me/+5524992729808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consultar via WhatsApp
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa História</h2>
              <p className="text-xl text-gray-600">
                Uma trajetória de dedicação e qualidade na personalização de uniformes e brindes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/d7952a95-1ae9-4a50-96ee-6846f4e5fba7.jpg"
                  alt="Nossa empresa"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Desde 2009</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A BJM nasceu da paixão por criar identidade visual através de uniformes e brindes personalizados. 
                    Começamos como uma pequena empresa familiar e hoje somos referência no mercado.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Paixão</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Precisão</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Agilidade</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Nossa Missão</h4>
                  <p className="text-gray-600">
                    Fortalecer a identidade visual das empresas através de uniformes e brindes personalizados 
                    de alta qualidade, sempre com foco na satisfação do cliente e prazos de entrega.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-xl mb-12 opacity-90">
              Pronto para personalizar os uniformes e brindes da sua empresa? 
              Fale conosco e solicite seu orçamento!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Telefone</h3>
                  <p>(24) 99272-9808</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">E-mail</h3>
                  <p>bjmuniformes@gmail.com</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Horário</h3>
                  <p>Seg-Sex: 8h às 18h</p>
                </CardContent>
              </Card>
            </div>

            <a 
              href="https://wa.me/+5524992729808"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 rounded-md has-[>svg]:px-4 bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Falar no WhatsApp Agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div>
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/9f850066-49b2-4e3b-997a-47c0574360b9.png" 
                  alt="BJM Logo" 
                  className="h-8 w-auto"
                />
                <p className="text-sm text-gray-400">Uniformes & Brindes Personalizados</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 BJM Uniformes e Brindes Personalizados. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm">
                Desenvolvido com ❤️ para fortalecer sua marca
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
