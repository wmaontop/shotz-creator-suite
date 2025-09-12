import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Link2, 
  Plus, 
  Settings, 
  Eye, 
  MousePointer, 
  Users,
  ExternalLink,
  Edit,
  Trash2
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    { label: "Total Views", value: "12,453", icon: Eye, change: "+12.5%" },
    { label: "Total Clicks", value: "3,241", icon: MousePointer, change: "+8.2%" },
    { label: "Active Links", value: "8", icon: Link2, change: "+2" },
    { label: "Followers", value: "1,847", icon: Users, change: "+24.1%" },
  ];

  const links = [
    { id: 1, title: "My Portfolio", url: "https://portfolio.com", clicks: 1243, active: true },
    { id: 2, title: "GitHub Profile", url: "https://github.com/username", clicks: 987, active: true },
    { id: 3, title: "Twitter", url: "https://twitter.com/username", clicks: 2156, active: true },
    { id: 4, title: "Instagram", url: "https://instagram.com/username", clicks: 1876, active: false },
    { id: 5, title: "YouTube Channel", url: "https://youtube.com/c/username", clicks: 654, active: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View Profile
              </Button>
              <Button size="sm" className="gradient-bg">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="gradient-secondary border-border hover:glow-primary transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-primary font-medium">{stat.change}</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Links Management */}
          <div className="lg:col-span-2">
            <Card className="gradient-secondary border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Link2 className="h-5 w-5 mr-2" />
                      My Links
                    </CardTitle>
                    <CardDescription>
                      Manage your bio links and track performance
                    </CardDescription>
                  </div>
                  <Button className="gradient-bg">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Link
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {links.map((link) => (
                    <div 
                      key={link.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-smooth"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${link.active ? 'bg-green-500' : 'bg-red-500'}`} />
                        <div>
                          <h4 className="font-medium">{link.title}</h4>
                          <p className="text-sm text-muted-foreground">{link.url}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">{link.clicks.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">clicks</p>
                        </div>
                        <Badge variant={link.active ? "default" : "secondary"}>
                          {link.active ? "Active" : "Inactive"}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            {/* Profile Preview */}
            <Card className="gradient-secondary border-border">
              <CardHeader>
                <CardTitle className="text-lg">Profile Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">@username</h3>
                  <p className="text-sm text-muted-foreground mb-4">Content Creator & Developer</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    shotz.lol/username
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Analytics */}
            <Card className="gradient-secondary border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Today's Views</span>
                    <span className="font-medium">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">This Week</span>
                    <span className="font-medium">1,823</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">This Month</span>
                    <span className="font-medium">7,456</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View Full Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}