
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, User, Award } from "lucide-react";
import NavMenu from "@/components/NavMenu";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  const handleGetStarted = () => {
    window.location.href = "https://app.rockae.com";
  };

  return (
    <div className="min-h-screen">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20 mt-16 text-center">
        <div className="fade-in space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Create and Share Quiz Questions Effortlessly
          </h1>
          <p className="text-xl text-muted-foreground">
            Generate engaging quiz questions that anyone can use. Perfect for educators, students, and quiz enthusiasts.
          </p>
          <Button
            size="lg"
            onClick={handleGetStarted}
            className="mt-8 text-lg px-8 py-6 rounded-full transition-all hover:scale-105 bg-pink-500 hover:bg-pink-600 text-white"
            >
            Get Started <ArrowRight className="ml-2" />
            </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container px-4 py-20 bg-accent/30">
        <div className="slide-in-bottom grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="glass p-6 text-center space-y-4">
            <BookOpen className="w-10 h-10 mx-auto" stroke="currentColor" style={{ color: "#e30449" }} />
            <h3 className="text-xl font-semibold">Smart Generation</h3>
            <p className="text-muted-foreground">
              Create high-quality quiz questions automatically using our advanced AI
            </p>
          </Card>
          <Card className="glass p-6 text-center space-y-4">
            <User className="w-10 h-10 mx-auto" stroke="currentColor" style={{ color: "#e30449" }} />
            <h3 className="text-xl font-semibold">Easy Sharing</h3>
            <p className="text-muted-foreground">
              Share your quizzes with anyone, anywhere, anytime
            </p>
          </Card>
          <Card className="glass p-6 text-center space-y-4">
            <Award className="w-10 h-10 mx-auto" stroke="currentColor" style={{ color: "#e30449" }} />
            <h3 className="text-xl font-semibold">Customizable</h3>
            <p className="text-muted-foreground">
              Tailor questions to your specific needs and subject matter
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works section */}
      <HowItWorks />

      {/* Pricing Section */}
      <section id="pricing" className="container px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">Choose the plan that works best for you</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="glass p-6 space-y-4">
            <h3 className="text-xl font-semibold">Free</h3>
            <div className="text-3xl font-bold">$0</div>
            <ul className="space-y-2 text-muted-foreground">
              <li>5 quizzes per month</li>
              <li>Basic question types</li>
              <li>Community sharing</li>
            </ul>
            <Button onClick={handleGetStarted} className="w-full">Get Started</Button>
          </Card>
          <Card className="glass p-6 space-y-4 border-primary">
            <h3 className="text-xl font-semibold">Pro</h3>
            <div className="text-3xl font-bold">$9.99/mo</div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Unlimited quizzes</li>
              <li>Advanced question types</li>
              <li>Priority support</li>
            </ul>
            <Button onClick={handleGetStarted} className="w-full">Get Started</Button>
          </Card>
          <Card className="glass p-6 space-y-4">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <div className="text-3xl font-bold">Custom</div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Custom features</li>
              <li>API access</li>
              <li>Dedicated support</li>
            </ul>
            <Button onClick={handleGetStarted} variant="outline" className="w-full">Contact Us</Button>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-20 bg-accent/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Rockae</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're passionate about making quiz creation accessible to everyone. Our platform combines cutting-edge technology with user-friendly design to revolutionize how people create and share educational content.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of educators and content creators who trust Rockae
          </p>
          <Button
            size="lg"
            onClick={handleGetStarted}
            className="text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
          >
            Create Your First Quiz <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
