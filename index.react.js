import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (name && rollNumber) {
      // Placeholder for actual authentication logic
      console.log("Logging in with", { name, rollNumber });
      router.push("/dashboard");
    } else {
      alert("Please enter both Name and Roll Number");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg rounded-2xl">
        <CardContent>
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <Input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-3"
          />
          <Input
            type="text"
            placeholder="Enter Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="mb-3"
          />
          <Button className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
