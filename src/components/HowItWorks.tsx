
import { Card } from "@/components/ui/card";
import { UserPlus, Upload, Brain, Link, ListChecks, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const handleGetStarted = () => {
    window.location.href = "https://app.rockae.com";
  };

  return (
    <section id="how-it-works" className="container px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">How Rockae Works</h2>
        <p className="text-muted-foreground text-lg">
          Create and share quiz questions in six simple steps
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
        <UserPlus className="w-10 h-10 mx-auto" stroke="currentColor" style={{ color: "#e30449" }} />
          <h3 className="font-semibold text-lg">1. Sign Up</h3>
          <p className="text-muted-foreground">
            Create an account to get started
          </p>
        </Card>

        <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
          <Upload className="w-10 h-10 mx-auto" stroke="currentColor" style={{ color: "#e30449" }} />
          <h3 className="font-semibold text-lg">2. Upload Notes</h3>
          <p className="text-muted-foreground">
            Add study materials via text file or paste them directly
          </p>
        </Card>

        <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
          <Brain className="w-10 h-10 mx-auto" stroke="currentColor" style={{ color: "#e30449" }} />
          <h3 className="font-semibold text-lg">3. AI Generates Questions</h3>
          <p className="text-muted-foreground">
            Our AI analyzes your notes and creates intelligent quiz questions
          </p>
        </Card>

        <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
          <Link className="w-10 h-10 mx-auto" stroke="currentColor" style={{ color: "#e30449" }} />
          <h3 className="font-semibold text-lg">4. Access Quiz</h3>
          <p className="text-muted-foreground">
            Receive a link to attempt the quiz
          </p>
        </Card>

        <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
          <ListChecks className="w-10 h-10 mx-auto" stroke="currentColor" style={{ color: "#e30449" }} />
          <h3 className="font-semibold text-lg">5. View & Manage</h3>
          <p className="text-muted-foreground">
            See your results instantly and manage your quizzes in the Quiz Bank
          </p>
        </Card>

        <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow bg-primary/5">
          <Rocket className="w-10 h-10 mx-auto" stroke="currentColor" style={{ color: "#e30449" }} />
          <h3 className="font-semibold text-lg">Ready to Start?</h3>
          <p className="text-muted-foreground">
            Boost your learning with AI-powered quizzes
          </p>
          <Button 
          onClick={handleGetStarted}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white"
          >
          Sign Up Now
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default HowItWorks;
